import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { EpisodePaginatorComponent } from "./episode-paginator.component";

describe("EpisodePaginatorComponent", () => {
	let component: EpisodePaginatorComponent;
	let fixture: ComponentFixture<EpisodePaginatorComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [EpisodePaginatorComponent]
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(EpisodePaginatorComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});
});
