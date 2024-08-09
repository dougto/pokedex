import { Component, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'search-input',
  templateUrl: './search-input.component.html',
  styleUrl: './search-input.component.scss',
})
export class SearchInputComponent {
  @Output() searchQuery = new EventEmitter<string>();
  searchForm = new FormGroup({
    name: new FormControl(''),
  });

  public onSubmit() {
    this.searchQuery.emit(this.searchForm.value.name || '');
    this.searchForm.controls.name.setValue('');
  }
};
