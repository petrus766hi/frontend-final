import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { finalize } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { EditpanitiaService } from '../services/editpanitia.service';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-editpanitia',
  templateUrl: './editpanitia.component.html',
  styleUrls: ['./editpanitia.component.scss'],
})
export class EditPanitiaComponent implements OnInit {
  public panitia: any = {};
  public id: string = '';
  editform: FormGroup;
  constructor(
    private editservice: EditpanitiaService,
    private route: ActivatedRoute,
    private router: Router,
    private ngxLoader: NgxUiLoaderService
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.id = params.idPanitia;
    });

    this.getUpdate();

    this.editform = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      district: new FormControl('', [Validators.required]),
    });
  }

  getUpdate() {
    this.editservice
      .getDataPanitia(this.id)
      .pipe(
        finalize(() => {
          console.log('done');
        })
      )
      .subscribe((results) => {
        this.panitia = results.data.panitia;
      });
  }
  updateData() {
    this.ngxLoader.start();
    const data: any = {
      is_active_peserta: this.panitia.is_active_peserta,
    };
    this.editservice
      .updateDataPanitia(this.id, data)
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
  checkValue(event: any) {
    this.panitia.is_active_peserta = event.checked;
  }
}
