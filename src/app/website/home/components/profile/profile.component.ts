import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { resquestData, resquestDataUpdate } from 'src/app/redux/nuvu/nuvu.action';
import { ProfileModel } from 'src/app/core/models/nuvu.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  profile$: Observable<ProfileModel>;
  // seletedcivilizations: CivilizationModel[]
  // indice: any

  constructor(
    private store: Store<any>
  ) {
    this.store.dispatch(resquestData());
    this.profile$ = this.store.select((data) => {
      return data.profile.profile 
    });
  }

  ngOnInit(): void {
  }

  // open(product) {
  //   this.seletedcivilizations = [product]
  //   this.indice = product.id % 2
  //   console.log("Indice...", this.indice)
  //   this.store.dispatch(resquestDataUpdate({ payload: Object.assign({}, product, {selected: true})  }));
  // }

}
