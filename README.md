# Birthday Records

## Environment 

- Angular CLI Version: 10.0.4
- Angular Core Version: 10.0.4
- Node Version: v12 (LTS)
- Default Port: 8000

## Application Demo:

![](https://hrcdn.net/s3_pub/istreet-assets/UX0PXMgCTqCa-cwRhTq2Ew/birthday-records.gif)

## Functionality Requirements

Complete a Angular Birthday Records component that sorts a list of people by name or by age.

Certain core Angular functionalities have already been implemented. Complete the Angular application as shown below in order to pass all the unit tests.

The component has the following functionalities:

- A list of people records `peopleList` is passed as a prop to the component.

- The application's initial state displays a table where the unsorted list of people records must be rendered, in the order they are passed in the props.

- The radio buttons to sort by `Name` or `Age` are toggled when clicked, so that only one is selected at a time.

- Clicking the radio button to sort by `Name` must sort the list by ascending name(person name).

- Clicking the radio button to sort by `Age` must sort the list by descending age (i.e., ascending birth date).

## Testing Requirements

The following data-test-id attributes are required in the component for the tests to pass:

- The radio button to sort by `Name` should have the data-test-id attribute `name`.
- The radio button to sort by `Age` should have the data-test-id attribute `age`.
- The table body `<tbody>` displaying the names and birth dates should have the data-test-id attribute `table`.

Please note that component has the above data-test-id attributes for test cases and certain classes and ids for rendering purposes. They should not be changed.

## Project Specifications

**Read Only Files**
- src/app/birthdayRecords/birthdayRecords.component.spec.ts
- src/app/app.component.spec.ts

**Commands**
- run: 
```bash
bash bin/env_setup && . $HOME/.nvm/nvm.sh && npm start
```
- install: 
```bash
bash bin/env_setup && . $HOME/.nvm/nvm.sh && npm install
```
- test: 
```bash
bash bin/env_setup && . $HOME/.nvm/nvm.sh && npm test
```
