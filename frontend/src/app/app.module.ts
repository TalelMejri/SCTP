import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { HomeComponentComponent } from './Components/home-component/home-component.component';
import { NosMarqueCompComponent } from './Components/home-component/nos-marque-comp/nos-marque-comp.component';
import { FoooterCompoComponent } from './Components/foooter-compo/foooter-compo.component';
import { SignUpCompComponent } from './Components/Auth/sign-up-comp/sign-up-comp.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginCompComponent } from './Components/Auth/login-comp/login-comp.component';
import { NgxsModule } from '@ngxs/store';
import { AuthStore } from './Store/actions';
import { NgxsStoragePluginModule } from '@ngxs/storage-plugin';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponentComponent,
    NosMarqueCompComponent,
    FoooterCompoComponent,
    SignUpCompComponent,
    LoginCompComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxsModule.forRoot([AuthStore]),
    NgxsStoragePluginModule.forRoot(),
    NgxsReduxDevtoolsPluginModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
