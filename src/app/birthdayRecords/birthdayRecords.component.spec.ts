import {async, ComponentFixture, TestBed, tick} from '@angular/core/testing';
import {BirthdayRecords} from './birthdayRecords.component';
import {RouterTestingModule} from '@angular/router/testing';
import {FormsModule} from '@angular/forms';
import {CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";

describe('BirthdayRecords', () => {
  let radioName;
  let radioAge;
  let table;

  const TEST_IDS = {
    nameId: 'name',
    ageId: 'age',
    tableId: 'table'
  }

  const getByTestId = (testId: string, compiled) => {
    return compiled.querySelector(`[data-test-id="${testId}"]`);
  };

  const peopleList = [
    {
      name: "Rhianna Johnson",
      birth: "11/30/2011",
    },
    {
      name: "Aiden Shaw",
      birth: "09/16/1992",
    },
    {
      name: "Trevon Floyd",
      birth: "01/16/1992",
    },
    {
      name: "Melanie Yates",
      birth: "12/12/2001",
    },
    {
      name: "Ferry Andrews",
      birth: "02/09/2000",
    },
    {
      name: "Jacinda Miller",
      birth: "12/01/1982",
    },
    {
      name: "Yale Davis",
      birth: "11/30/2019",
    },
    {
      name: "Eliza Baxter",
      birth: "10/31/1999",
    },
  ]

  const peopleListByName = [
    {
      name: "Aiden Shaw",
      birth: "09/16/1992",
    },
    {
      name: "Eliza Baxter",
      birth: "10/31/1999",
    },
    {
      name: "Ferry Andrews",
      birth: "02/09/2000",
    },
    {
      name: "Jacinda Miller",
      birth: "12/01/1982",
    },
    {
      name: "Melanie Yates",
      birth: "12/12/2001",
    },
    {
      name: "Rhianna Johnson",
      birth: "11/30/2011",
    },
    {
      name: "Trevon Floyd",
      birth: "01/16/1992",
    },
    {
      name: "Yale Davis",
      birth: "11/30/2019",
    },
  ]

  const peopleListByAge = [
    {
      name: "Jacinda Miller",
      birth: "12/01/1982",
    },
    {
      name: "Trevon Floyd",
      birth: "01/16/1992",
    },
    {
      name: "Aiden Shaw",
      birth: "09/16/1992",
    },
    {
      name: "Eliza Baxter",
      birth: "10/31/1999",
    },
    {
      name: "Ferry Andrews",
      birth: "02/09/2000",
    },
    {
      name: "Melanie Yates",
      birth: "12/12/2001",
    },
    {
      name: "Rhianna Johnson",
      birth: "11/30/2011",
    },
    {
      name: "Yale Davis",
      birth: "11/30/2019",
    }
  ]

  const factory = (peopleList) => {
    const fixture: ComponentFixture<BirthdayRecords> = TestBed.createComponent(BirthdayRecords);
    const component: BirthdayRecords = fixture.componentInstance;
    component.peopleList = peopleList;
    const compiled = fixture.debugElement.nativeElement;
    fixture.detectChanges();
    return {
      fixture,
      component,
      compiled
    };
  };

  beforeEach(async(() => {
    TestBed
      .configureTestingModule({
        imports: [
          RouterTestingModule,
          FormsModule
        ],
        declarations: [BirthdayRecords],
        schemas : [CUSTOM_ELEMENTS_SCHEMA]
      })
      .compileComponents();

  }));

  it('check if radio name and age radios are switched when clicked', async () => {
    const {compiled, fixture} = factory(peopleList);
    await fixture.whenStable();

    radioName = getByTestId(TEST_IDS.nameId, compiled);
    radioAge = getByTestId(TEST_IDS.ageId, compiled);
    table = getByTestId(TEST_IDS.tableId, compiled);

    await radioName.click();
    await fixture.detectChanges();
    await fixture.whenStable();

    radioName = getByTestId(TEST_IDS.nameId, compiled);
    radioAge = getByTestId(TEST_IDS.ageId, compiled);

    expect(radioName.checked).toBeTruthy();
    expect(radioAge.checked).toBeFalsy();

    await radioAge.click();
    await fixture.detectChanges();
    await fixture.whenStable();

    radioName = getByTestId(TEST_IDS.nameId, compiled);
    radioAge = getByTestId(TEST_IDS.ageId, compiled);

    expect(radioName.checked).toBeFalsy();
    expect(radioAge.checked).toBeTruthy();
  });

  it('Initial table shows data in order as they appear in props', async() => {
    const {compiled, fixture} = factory(peopleList);
    await fixture.whenStable();

    radioName = getByTestId(TEST_IDS.nameId, compiled);
    radioAge = getByTestId(TEST_IDS.ageId, compiled);
    table = getByTestId(TEST_IDS.tableId, compiled);

    expect(table.children.length).toEqual(peopleList.length);
    peopleList.forEach((item, index) => {
      expect(table.children[index].children[0].textContent.trim()).toEqual(item.name);
      expect(table.children[index].children[1].textContent.trim()).toEqual(item.birth);
    });
  });

  it('Sort by name works', async() => {
    const {compiled, fixture} = factory(peopleList);
    await fixture.whenStable();

    radioName = getByTestId(TEST_IDS.nameId, compiled);
    radioAge = getByTestId(TEST_IDS.ageId, compiled);
    table = getByTestId(TEST_IDS.tableId, compiled);

    await radioName.click();
    await fixture.detectChanges();
    await fixture.whenStable();

    table = getByTestId(TEST_IDS.tableId, compiled);
    expect(table.children.length).toEqual(peopleListByName.length);
    peopleListByName.forEach((item, index) => {
      expect(table.children[index].children[0].textContent.trim()).toEqual(item.name);
      expect(table.children[index].children[1].textContent.trim()).toEqual(item.birth);
    });
  });

  it('Sort by age works', async() => {
    const {compiled, fixture} = factory(peopleList);
    await fixture.whenStable();

    radioName = getByTestId(TEST_IDS.nameId, compiled);
    radioAge = getByTestId(TEST_IDS.ageId, compiled);
    table = getByTestId(TEST_IDS.tableId, compiled);

    await radioAge.click();
    await fixture.detectChanges();
    await fixture.whenStable();

    table = getByTestId(TEST_IDS.tableId, compiled);
    expect(table.children.length).toEqual(peopleListByAge.length);
    peopleListByAge.forEach((item, index) => {
      expect(table.children[index].children[0].textContent.trim()).toEqual(item.name);
      expect(table.children[index].children[1].textContent.trim()).toEqual(item.birth);
    });
  });

  it('Perform series of operation', async() => {
    const {compiled, fixture} = factory(peopleList);
    await fixture.whenStable();

    radioName = getByTestId(TEST_IDS.nameId, compiled);
    radioAge = getByTestId(TEST_IDS.ageId, compiled);
    table = getByTestId(TEST_IDS.tableId, compiled);

    expect(table.children.length).toEqual(peopleList.length);
    peopleList.forEach((item, index) => {
      expect(table.children[index].children[0].textContent.trim()).toEqual(item.name);
      expect(table.children[index].children[1].textContent.trim()).toEqual(item.birth);
    });

    await radioName.click();
    await fixture.detectChanges();
    await fixture.whenStable();

    table = getByTestId(TEST_IDS.tableId, compiled);
    expect(table.children.length).toEqual(peopleListByName.length);
    peopleListByName.forEach((item, index) => {
      expect(table.children[index].children[0].textContent.trim()).toEqual(item.name);
      expect(table.children[index].children[1].textContent.trim()).toEqual(item.birth);
    });

    await radioAge.click();
    await fixture.detectChanges();
    await fixture.whenStable();

    table = getByTestId(TEST_IDS.tableId, compiled);
    expect(table.children.length).toEqual(peopleListByAge.length);
    peopleListByAge.forEach((item, index) => {
      expect(table.children[index].children[0].textContent.trim()).toEqual(item.name);
      expect(table.children[index].children[1].textContent.trim()).toEqual(item.birth);
    });

    await radioName.click();
    await fixture.detectChanges();
    await fixture.whenStable();

    table = getByTestId(TEST_IDS.tableId, compiled);
    expect(table.children.length).toEqual(peopleListByName.length);
    peopleListByName.forEach((item, index) => {
      expect(table.children[index].children[0].textContent.trim()).toEqual(item.name);
      expect(table.children[index].children[1].textContent.trim()).toEqual(item.birth);
    });
  });
});
