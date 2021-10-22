import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { LogoComponent } from './header/logo/logo.component';
import { ClassDirectivesComponent } from './class3-directives/class-directives.component';
import { ClassDatabindingComponent } from './class2-databinding/class-databinding.component';
import { ClassAttDirectiveComponent } from './class4-att-directive/class-att-directive.component';
import { ProductComponent } from './class4-practice/example1/products/product.component';
import { ProductsComponent } from './class4-practice/example2/products/products.component';
import { FormComponent } from './class4-practice/example2/products/form/form.component';
import { ListingComponent } from './class4-practice/example2/products/listing/listing.component';
import { LifecycleComponent } from './class5-lifecycle/lifecycle/lifecycle.component';
import { Class5ViewChildComponent } from './class5-view-child/class5-view-child.component';
import { MyDateComponent } from './class6-child-children/my-date/my-date.component';
import { MainComponent } from './class6-child-children/main/main.component';
import { MyPageComponent } from './class6-child-children/my-page/my-page.component';
import { HomeComponent } from './class7-routes/home/home.component';
import { Page1Component } from './class7-routes/page1/page1.component';
import { Page2Component } from './class7-routes/page2/page2.component';
import { Page3Component } from './class7-routes/page3/page3.component';
import { Page4Component } from './class7-routes/page4/page4.component';
import { CategoriesComponent } from './class7-routes/categories/categories.component';
import { CategoryComponent } from './class7-routes/categories/category/category.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './global/guard/auth.guard';
import { ObservablesComponent } from './class8-observable/observables/observables.component';
import { MyObservableComponent } from './class8-observable/my-observable/my-observable.component';

const myRoute: Routes = [
  { path: '', component: Page1Component },
  {
    path: 'page1',
    component: Page1Component,
    canActivate: [AuthGuard],
  },
  {
    path: 'page2/:id',
    component: Page2Component,
  },
  {
    path: 'page3',
    component: Page3Component,
  },
  {
    path: 'page4',
    component: Page4Component,
  },
  {
    path: 'categories',
    component: CategoriesComponent,
    canActivateChild: [AuthGuard],
    children: [
      {
        path: ':id',
        component: CategoryComponent,
      },
    ],
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'observable',
    component: ObservablesComponent,
  },
  {
    path: 'my-observable',
    component: MyObservableComponent,
  },
  {
    path: 'not-found',
    component: NotFoundComponent,
  },
  {
    path: '**',
    redirectTo: 'not-found',
  },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    LogoComponent,
    ClassDirectivesComponent,
    ClassDatabindingComponent,
    ClassAttDirectiveComponent,
    ProductComponent,
    ProductsComponent,
    FormComponent,
    ListingComponent,
    LifecycleComponent,
    Class5ViewChildComponent,
    MyDateComponent,
    MainComponent,
    MyPageComponent,
    HomeComponent,
    Page1Component,
    Page2Component,
    Page3Component,
    Page4Component,
    CategoriesComponent,
    LoginComponent,
    ObservablesComponent,
    MyObservableComponent,
  ],
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(myRoute)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
