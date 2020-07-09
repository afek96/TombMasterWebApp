import { Component, OnInit, ViewChild, ElementRef, AfterViewInit} from '@angular/core';
import { FormControl } from '@angular/forms';
import { FontNameManagerService } from 'src/app/font-name-manager.service';
import { FontName } from 'src/app/Models/font-name';
import { CompleterCmp } from 'ng2-completer';


@Component({
  selector: 'app-create-font',
  templateUrl: './create-font.component.html',
  styleUrls: ['./create-font.component.scss'],
  providers: [FontNameManagerService],
})
export class CreateFontComponent implements OnInit, AfterViewInit {

  @ViewChild("inputToFocus") inputElement: CompleterCmp;
  @ViewChild("hiddenInputForLabel") hiddenInputForLabel: ElementRef;
  
  myControl = new FormControl();
  fonts: FontName[];

  constructor(private fontService: FontNameManagerService) { }

  ngAfterViewInit(): void {
    console.log("ngAfterViewInit");
    
  }

  completerFocus(): void{
    this.hiddenInputForLabel.nativeElement.value = 'x';
  }
  
  completerBlur(): void{
    let value = this.inputElement.ctrInput.nativeElement.value;
    if(value == ''){
      this.hiddenInputForLabel.nativeElement.value = '';
    }
  }

  ngOnInit(): void {
    this.fontService.getFonts().subscribe(data => {
      this.fonts = data;
    });
  }

  labelClick(): void{
    this.inputElement.ctrInput.nativeElement.focus();
  }
}
