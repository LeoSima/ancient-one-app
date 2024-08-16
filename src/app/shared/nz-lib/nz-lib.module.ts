import { NgModule } from '@angular/core';
import { NZ_I18N, pt_BR } from 'ng-zorro-antd/i18n';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzFlexModule } from 'ng-zorro-antd/flex';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { IconDefinition } from '@ant-design/icons-angular';
import { ArrowLeftOutline, IdcardOutline, LockOutline, MailOutline, UserOutline } from '@ant-design/icons-angular/icons';
import { ReactiveFormsModule } from '@angular/forms';

const icons: IconDefinition[] = [ArrowLeftOutline, IdcardOutline, LockOutline, MailOutline, UserOutline]; 

@NgModule({
	imports: [
		NzIconModule.forChild(icons),
	],
	exports: [
		NzFlexModule,
		NzGridModule,
		NzLayoutModule,
		NzPageHeaderModule,
		NzCardModule,
		NzFormModule,
		ReactiveFormsModule,
		NzInputModule,
		NzButtonModule,
		NzIconModule,
	],
	providers: [{ provide: NZ_I18N, useValue: pt_BR}]
})
export class NzLibModule { }
