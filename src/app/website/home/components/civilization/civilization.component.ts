import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from './../../../../redux'
import { Observable } from 'rxjs';
import { resquestData, resquestDataUpdate } from 'src/app/redux/civilizations/civilization.action';
import { CivilizationModel } from 'src/app/core/models/civilizations.model';

@Component({
  selector: 'app-civilization',
  templateUrl: './civilization.component.html',
  styleUrls: ['./civilization.component.scss']
})
export class CivilizationComponent implements OnInit {

  civilizations$: Observable<CivilizationModel>;
  seletedcivilizations: CivilizationModel[]
  indice: any

  constructor(
    private store: Store<any>
  ) {
    this.store.dispatch(resquestData());
    this.civilizations$ = this.store.select((data) => data.civilizations.civilizations );
  }

  ngOnInit(): void {
  }

  open(product) {
    this.seletedcivilizations = [product]
    this.indice = product.id % 2
    console.log("Indice...", this.indice)
    this.store.dispatch(resquestDataUpdate({ payload: Object.assign({}, product, {selected: true})  }));
  }

}
