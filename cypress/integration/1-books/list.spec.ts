describe('Book list', () => {
  beforeEach(() => {
    cy.visit('http://localhost:1234')
  })

  it('displays the books', () => {
    cy.get('.books .book').should('have.length', 211)

    cy.get('.books .book h2').first().should('have.text', 'Fundamentals of Wavelets')
    cy.get('.books .book h3').first().should('have.text', 'Goswami, Jaideva')
  })

  it('shows details of a book in a contextual modal', () => {
    cy.get('.books .book a').first().click()

    cy.get('[role=presentation] h2').should('have.text', 'Fundamentals of Wavelets')
    cy.get('[role=presentation] h3').should('have.text', 'by Goswami, Jaideva - published by Wiley')
    cy.get('[role=presentation] .genres .genre').first().should('have.text', 'tech')
    cy.get('[role=presentation] .genres .genre').last().should('have.text', 'signal_processing')
    cy.get('[role=presentation] .height span').last().should('have.text', '228')
  })

  it('shows details of a book on an own page', () => {
    cy.visit('http://localhost:1234/books/cfc806c7-632a-4f42-b039-be59245caf4b')

    cy.get('h2').should('have.text', 'Fundamentals of Wavelets')
    cy.get('h3').should('have.text', 'by Goswami, Jaideva - published by Wiley')
    cy.get('.genres .genre').first().should('have.text', 'tech')
    cy.get('.genres .genre').last().should('have.text', 'signal_processing')
    cy.get('.height span').last().should('have.text', '228')
  })

  // it('can check off an item as completed', () => {
  //   // In addition to using the `get` command to get an element by selector,
  //   // we can also use the `contains` command to get an element by its contents.
  //   // However, this will yield the <label>, which is lowest-level element that contains the text.
  //   // In order to check the item, we'll find the <input> element for this <label>
  //   // by traversing up the dom to the parent element. From there, we can `find`
  //   // the child checkbox <input> element and use the `check` command to check it.
  //   cy.contains('Pay electric bill')
  //     .parent()
  //     .find('input[type=checkbox]')
  //     .check()
  //
  //   // Now that we've checked the button, we can go ahead and make sure
  //   // that the list element is now marked as completed.
  //   // Again we'll use `contains` to find the <label> element and then use the `parents` command
  //   // to traverse multiple levels up the dom until we find the corresponding <li> element.
  //   // Once we get that element, we can assert that it has the completed class.
  //   cy.contains('Pay electric bill')
  //     .parents('li')
  //     .should('have.class', 'completed')
  // })
  //
  // context('with a checked task', () => {
  //   beforeEach(() => {
  //     // We'll take the command we used above to check off an element
  //     // Since we want to perform multiple tests that start with checking
  //     // one element, we put it in the beforeEach hook
  //     // so that it runs at the start of every test.
  //     cy.contains('Pay electric bill')
  //       .parent()
  //       .find('input[type=checkbox]')
  //       .check()
  //   })
  //
  //   it('can filter for uncompleted tasks', () => {
  //     // We'll click on the "active" button in order to
  //     // display only incomplete items
  //     cy.contains('Active').click()
  //
  //     // After filtering, we can assert that there is only the one
  //     // incomplete item in the list.
  //     cy.get('.todo-list li')
  //       .should('have.length', 1)
  //       .first()
  //       .should('have.text', 'Walk the dog')
  //
  //     // For good measure, let's also assert that the task we checked off
  //     // does not exist on the page.
  //     cy.contains('Pay electric bill').should('not.exist')
  //   })
  //
  //   it('can filter for completed tasks', () => {
  //     // We can perform similar steps as the test above to ensure
  //     // that only completed tasks are shown
  //     cy.contains('Completed').click()
  //
  //     cy.get('.todo-list li')
  //       .should('have.length', 1)
  //       .first()
  //       .should('have.text', 'Pay electric bill')
  //
  //     cy.contains('Walk the dog').should('not.exist')
  //   })
  //
  //   it('can delete all completed tasks', () => {
  //     // First, let's click the "Clear completed" button
  //     // `contains` is actually serving two purposes here.
  //     // First, it's ensuring that the button exists within the dom.
  //     // This button only appears when at least one task is checked
  //     // so this command is implicitly verifying that it does exist.
  //     // Second, it selects the button so we can click it.
  //     cy.contains('Clear completed').click()
  //
  //     // Then we can make sure that there is only one element
  //     // in the list and our element does not exist
  //     cy.get('.todo-list li')
  //       .should('have.length', 1)
  //       .should('not.have.text', 'Pay electric bill')
  //
  //     // Finally, make sure that the clear button no longer exists.
  //     cy.contains('Clear completed').should('not.exist')
  //   })
  // })
})
