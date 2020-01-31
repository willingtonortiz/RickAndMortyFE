import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { EpisodeContainerComponent } from "./episode-container.component";

describe("EpisodeContainerComponent", () => {
	let component: EpisodeContainerComponent;
	let fixture: ComponentFixture<EpisodeContainerComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [EpisodeContainerComponent]
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(EpisodeContainerComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});
});
