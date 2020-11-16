import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { sendFormService } from './../../../core/services/sendForm.services'

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  statusForm: boolean = true
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private sendFormService: sendFormService
  ) { 
    this.buildForm();
  }

  ngOnInit(): void {
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required]],
      commentary: ['', [Validators.required]]
    });

  }

  save(event: Event) {
    event.preventDefault();
    if(this.form.valid){
      this.sendFormService.send(this.form.value)
      .subscribe(response => {
        alert("Comentario Guardado");
        this.statusForm = true
      });
    }
  }

  get nameField() {
    return this.form.get('name')
  }
  get emailField() {
    return this.form.get('email')
  }
  get phoneField() {
    return this.form.get('phone')
  }
  get commentaryField() {
    return this.form.get('commentary')
  }

  changeBtn() {
    this.statusForm = !this.statusForm
  }

}
