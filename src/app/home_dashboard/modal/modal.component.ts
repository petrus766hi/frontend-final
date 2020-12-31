import { Component, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { finalize } from 'rxjs/operators';
import { Router } from '@angular/router';
import { QuoteService } from '../quote.service';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import Swal from 'sweetalert2';
import { NgxUiLoaderService } from 'ngx-ui-loader';
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  closeResult: string;
  public dataTournament: any = {
    NamaTournament: '',
    TypeTournament: '',
    JumlahPeserta: '',
    UsiaTournament: '',
    CodeTournament: '',
    Informasi: '',
    Pendaftaran: '',
  };
  datas: any = [];
  register: boolean;

  config: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '15rem',
    minHeight: '5rem',
    placeholder: 'Enter text here...',
    translate: 'no',
    defaultParagraphSeparator: 'p',
    defaultFontName: 'Arial',
    toolbarHiddenButtons: [['bold']],
    customClasses: [
      {
        name: 'quote',
        class: 'quote',
      },
      {
        name: 'redText',
        class: 'redText',
      },
      {
        name: 'titleText',
        class: 'titleText',
        tag: 'h1',
      },
    ],
  };
  constructor(
    private modalService: NgbModal,
    private quoteService: QuoteService,
    private ngxLoader: NgxUiLoaderService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getIdPanitia();
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };
  }
  open(content: any) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title', size: 'xl' }).result.then(
      (result: any) => {
        this.closeResult = `Closed with: ${result}`;
      },
      (reason: any) => {
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

  createTournament = () => {
    this.ngxLoader.start();
    if (this.register) {
      this.ngxLoader.stop();
      Swal.fire({
        icon: 'error',
        title: 'Mohon Maaf Ada Tidak Bisa Membuat Lomba 2x',
        text: 'Hubungi Master',
      });
    } else {
      this.quoteService
        .createTournament(this.dataTournament)
        .pipe(
          finalize(() => {
            console.log('Done');
          })
        )
        .subscribe((result) => {
          if (result.success) {
            this.ngxLoader.stop();
            this.UpdatePanitia();
            Swal.fire({
              icon: 'success',
              title: result.msg,
            }).then((result) => {
              if (result.isConfirmed) {
                this.router.navigate(['tournament']);
              }
            });
          } else {
            this.ngxLoader.stop();
            Swal.fire({
              icon: 'error',
              title: result.msg,
            });
          }
        });
    }
  };
  getIdPanitia() {
    let id = localStorage.getItem('id');
    this.quoteService.getPanitia(id).subscribe((res) => {
      this.register = res.register;
    });
  }
  UpdatePanitia() {
    const data = {
      register: true,
    };
    let id = localStorage.getItem('id');
    this.quoteService.UpdateRegisterPanitia(id, data).subscribe((res) => {});
  }
}
