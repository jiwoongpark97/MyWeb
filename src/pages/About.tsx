import { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/legacy/build/pdf.worker.min.js',
    import.meta.url,
).toString();

export default function About() {
    const [numPages, setNumPages] = useState<number>(1);

    function onDocumentLoadSuccess(): void {
        setNumPages(1);
    }

    return (
        <div className="overflow-auto w-100 h-100 d-flex flex-column justify-content-start align-items-center" style={{ paddingTop: '150px', paddingLeft: 10, paddingRight: 10, paddingBottom: 10, backgroundColor: '#999491' }}>
            <Document file="resume_jiwoongpark.pdf" onLoadSuccess={onDocumentLoadSuccess}>
                <Page renderAnnotationLayer={false} renderTextLayer={false} pageNumber={numPages} />
            </Document>
        </div>
    )
}