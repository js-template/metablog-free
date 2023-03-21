describe('Page check', () => {
   it('should render the home page', () => {
      // render the home page
      cy.visit('http://localhost:3000/')
   })

   it('navigate to the blog page', () => {
      // Start from the home page
      cy.visit('http://localhost:3000/')

      // Find a link with an href attribute containing "View All Post" and click it
      cy.contains('View All Post').click()

      // The new url should include "/blog"
      cy.url().should('include', '/blog')
   })

   it('navigate to the single-blog page from post', () => {
      // Start from the home page
      cy.visit('http://localhost:3000/')

      // click the link for bog title
      cy.get('a[href*="/single-post"]', { timeout: 15000 }).eq(3).click()

      // The new url should include "/single-post" for single blog post
      cy.url().should('include', '/single-post')
   })
})
