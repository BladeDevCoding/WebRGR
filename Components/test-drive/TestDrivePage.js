class TestDrivePage extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <div class="container mx-auto mt-8 px-4 pb-16">
                <test-drive-hero></test-drive-hero>
                <test-drive-navigation></test-drive-navigation>
                
                <div class="max-w-4xl mx-auto">
                    <test-drive-about></test-drive-about>
                    <test-drive-models></test-drive-models>
                    <test-drive-conditions></test-drive-conditions>
                    <test-drive-booking></test-drive-booking>
                    <test-drive-faq></test-drive-faq>
                </div>
            </div>
        `;
    }
}

customElements.define('test-drive-page', TestDrivePage); 