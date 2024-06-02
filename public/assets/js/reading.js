// import { _$ } from "js/libs.js";

        window.PDFJS_LOCALE = {
        pdfJsWorker: 'node_modules/flip-book/js/pdf.worker.js'
        };
        require('flip-book');

        $('#container').FlipBook({
        pdf: 'buku/CondoLiving.pdf',
        template: {
            html: 'node_modules/flip-book/templates/default-book-view.html',
            links: [
            {
                rel: 'stylesheet',
                href: 'node_modules/flip-book/css/font-awesome.min.css'
            }
            ],
            styles: [
            'node_modules/flip-book/css/white-book-view.css'
            ],
            links: [{
            rel: 'stylesheet',
            href: 'node_modules/flip-book/css/font-awesome.min.css'
            }],
            script: 'node_modules/flip-book/js/default-book-view.js'
        }
        });