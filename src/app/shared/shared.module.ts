import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [NavbarComponent, FooterComponent],
  imports: [CommonModule, RouterModule],
  exports: [NavbarComponent, FooterComponent],
})
export class SharedModule {}
