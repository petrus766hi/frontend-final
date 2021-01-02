import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';

import { QuoteService } from './quote.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Product } from '../models/product';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-home_dashboard',
  templateUrl: './home_dashboard.component.html',
  styleUrls: ['./home_dashboard.component.scss'],
})
export class Home_DashboardComponent implements OnInit {
  quote: string | undefined;
  isLoading = false;
  closeResult: string;
  products1: Product[];
  public data: any = {};
  hidden_button_panitia = false;
  hidden_button_lomba = false;
  lengthPeserta: number;
  lengthPanitia: number;
  regform: FormGroup;
  public datas: any = [];
  dataMaster: Array<any>;
  constructor(
    private quoteService: QuoteService,
    private modalService: NgbModal,
    private router: Router,
    private ngxLoader: NgxUiLoaderService
  ) {}

  open(content: any) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title', size: 'xl' }).result.then(
      (result) => {
        this.closeResult = `Closed with: ${result}`;
      },
      (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      }
    );
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
  ngOnInit() {
    this.checkRole();
    this.isLoading = true;
    this.quoteService
      .getAllPanitia()
      .pipe(
        finalize(() => {
          console.log('Done');
        })
      )
      .subscribe((result: any) => {
        const data = result.data.panitia.filter((e: any) => {
          return e.role === 'panitia';
        });
        this.lengthPanitia = data.length;
        this.products1 = data;
      });
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };
    this.getPesertaLength();
    this.getLombaLength();

    this.regform = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(4)]),
    });
  }
  goEdit(data: any) {
    this.router.navigate(['home/panitia'], { queryParams: { idPanitia: data } });
  }
  status(data: any) {
    if (data === true) {
      return 'AKTIF';
    } else {
      return 'TIDAK AKTIF';
    }
  }
  checkRole() {
    const role = localStorage.getItem('role');
    if (role === 'panitia') {
      this.hidden_button_panitia = true;
      this.hidden_button_lomba = false;
    } else {
      this.hidden_button_panitia = false;
      this.hidden_button_lomba = true;
    }
  }
  createPanitias() {
    this.ngxLoader.start();
    this.quoteService
      .createPanitia(this.data)
      .pipe(
        finalize(() => {
          console.log('Done');
        })
      )
      .subscribe((result) => {
        if (result.success) {
          Swal.fire({
            icon: 'success',
            title: 'Berhasil Membuat Panitia',
            text: result.msg,
          });
          this.router.navigate(['home']);

          this.ngxLoader.stop();
        } else {
          Swal.fire({
            icon: 'error',
            title: result.msg,
          });
          this.ngxLoader.stop();
        }
      });
  }
  DeletePeserta(id: any) {
    this.ngxLoader.start();
    this.quoteService
      .DeleteDataPeserta(id)
      .pipe(
        finalize(() => {
          console.log('done');
        })
      )
      .subscribe((result) => {
        if (result.success) {
          Swal.fire({
            icon: 'success',
            title: result.msg,
          });
          this.router.navigate(['home']);

          this.ngxLoader.stop();
        } else {
          Swal.fire({
            icon: 'error',
            title: result.msg,
          });
          this.ngxLoader.stop();
        }
      });
  }
  getPesertaLength() {
    this.quoteService.getDataPeserta().subscribe((result) => {
      this.lengthPeserta = result.data.length;
    });
  }
  getLombaLength() {
    this.quoteService.getAllTournament().subscribe((result) => {
      console.log('lomba', result);
    });
  }
}
