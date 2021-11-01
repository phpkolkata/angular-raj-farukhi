import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './class7-routes/categories/categories.component';
import { CategoryComponent } from './class7-routes/categories/category/category.component';
import { Page1Component } from './class7-routes/page1/page1.component';
import { Page2Component } from './class7-routes/page2/page2.component';
import { Page3Component } from './class7-routes/page3/page3.component';
import { Page4Component } from './class7-routes/page4/page4.component';
import { MyObservableComponent } from './class8-observable/my-observable/my-observable.component';
import { ObservablesComponent } from './class8-observable/observables/observables.component';
import { AuthGuard } from './global/guard/auth.guard';
import { LoginComponent } from './login/login.component';
import { TdFormsComponent } from './class7-routes/td-forms/td-forms.component';
import { ReactiveFormsComponent } from './class7-routes/reactive-forms/reactive-forms.component';
import { NotFoundComponent } from './not-found/not-found.component';

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
    path: 'reactive-form',
    component: ReactiveFormsComponent,
  },
  {
    path: 'td-form',
    component: TdFormsComponent,
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
  imports: [RouterModule.forRoot(myRoute)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
