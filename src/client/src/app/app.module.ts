import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { UserInputComponent } from './components/user-input/user-input.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import * as fromUser from './store/reducers/user/user.reducer';
import { EffectsModule } from '@ngrx/effects';
import { UserEffects } from './store/effects/user/user.effects';
import { PageUsersComponent } from './pages/page-users/page-users.component';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { PageLoginComponent } from './pages/page-login/page-login.component';
import { PageJoinGameComponent } from './pages/page-join-game/page-join-game.component';
import { PageCreateGameComponent } from './pages/page-create-game/page-create-game.component';
import { CoreModule } from './modules/core/core.module';
import { UsersModule } from './modules/users/users.module';

const config: SocketIoConfig = { url: !environment.production ? 'http://localhost:3000/' : '', options: {} };

@NgModule({
  declarations: [
    AppComponent,
    PageJoinGameComponent,
    PageCreateGameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SocketIoModule.forRoot(config),
    CoreModule,
    UsersModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
