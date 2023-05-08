import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';

import { MainPageComponent } from './pages/main-page/main-page.component';
import { AviaRoutingModule } from './avia-routing.module';
import { FlightSearchComponent } from './components/flight-search/flight-search.component';
import { AuthModule } from '../auth/auth.module';
import { searchReducer } from '../store/reducers/search.reducer';
import { SharedModule } from '../shared/shared.module';
import { StringifyPassengersPipe } from '../avia/pipes/stringify-passengers.pipe';
import { AirportValuePipe } from './pipes/airport-name.pipe';
import { tripReducer } from '../store/reducers/trip.reducer';

@NgModule({
  declarations: [
    MainPageComponent,
    FlightSearchComponent,
    StringifyPassengersPipe,
    AirportValuePipe,
  ],
  imports: [
    CommonModule,
    SharedModule,
    AviaRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AuthModule,
    HttpClientModule,
    StoreModule.forFeature('search', searchReducer),
    StoreModule.forFeature('trip', tripReducer),
  ],
})
export class AviaModule {}
