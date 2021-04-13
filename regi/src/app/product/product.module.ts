import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { ProductRoutingModule } from './product-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductListComponent } from './product-list/product-list.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { FileUploadComponent } from './file-upload/file-upload.component';


@NgModule({
  declarations: [ProductListComponent, CreateProductComponent, FileUploadComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    
    ProductRoutingModule
  ]
})
export class ProductModule { }
