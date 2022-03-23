import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { InputComponent } from './input/input.component';
import { InputErrorComponent } from './input-error/input-error.component';
import { InputValidatorDirective } from './validators/input-validator.directive';
import { RouterModule } from '@angular/router';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { CardComponent } from './card/card.component';
import { TopNavbarComponent } from './top-navbar/top-navbar.component';
import { IconsProviderModule } from '../icons-provider.module';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { FooterComponent } from './footer/footer.component';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { PasswordStrengthComponent } from './password-strength/password-strength.component';
@NgModule({
  declarations: [
    InputComponent,
    InputErrorComponent,
    InputValidatorDirective,
    CardComponent,
    TopNavbarComponent,
    FooterComponent,
    PasswordStrengthComponent,
  ],
  exports: [
    InputComponent,
    InputErrorComponent,
    InputValidatorDirective,
    CardComponent,
    TopNavbarComponent,
    FooterComponent,
    PasswordStrengthComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NzModalModule,
    NzIconModule,
    NzButtonModule,
    NzFormModule,
    RouterModule,
    IconsProviderModule,
    NzInputModule,
    NzSelectModule,
    NzDropDownModule,
    NzLayoutModule,
    NzTypographyModule,
  ],
})
export class SharedModule {}
