describe('Protractor Demo App', function() {
    it('should have a title', function() {
        browser.waitForAngularEnabled(false);
        browser.get('http://github.com/');

        expect(browser.getTitle()).toContain('GitHub');
    });
});