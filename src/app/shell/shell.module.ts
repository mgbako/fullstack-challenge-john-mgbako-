import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShellComponent } from './shell.component';
import { IconsProviderModule } from '../icons-provider.module';
import { RouterModule } from '@angular/router';
import { AuthShellComponent } from './auth-shell/auth-shell.component';
import { FormsModule } from '@angular/forms';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { SharedModule } from '../shared/shared.module';
import { NzButtonModule } from 'ng-zorro-antd/button';

@NgModule({
  declarations: [ShellComponent, AuthShellComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule,
    NzGridModule,
    NzCarouselModule,
    NzButtonModule,
    SharedModule,
  ],
})
export class ShellModule {}
