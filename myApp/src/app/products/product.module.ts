import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AddProductComponent } from './list-product/add-product/add-product.component';
import { ListProductComponent } from './list-product/list-product.component';
import { ViewProductComponent } from './list-product/view-product/view-product.component';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {
    path: '',
    component: ListProductComponent,
    children: [
      {
        path: 'add-product',
        component: AddProductComponent,
      },
      {
        path: 'view-product',
        component: ViewProductComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [
    ListProductComponent,
    AddProductComponent,
    ViewProductComponent,
  ],
  imports: [CommonModule, FormsModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductModule {}
