
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

export const generatePDF = async (filename: string = 'invoice.pdf') => {
    const pages = document.querySelectorAll('.print-page');
    if (!pages.length) {
        console.error('No pages found to print');
        return;
    }

    const pdf = new jsPDF('p', 'mm', 'a4');

    for (let i = 0; i < pages.length; i++) {
        const page = pages[i] as HTMLElement;

        // Create canvas from the element
        const canvas = await html2canvas(page, {
            scale: 2, // Higher scale for better resolution
            useCORS: true,
            logging: false,
            backgroundColor: '#ffffff'
        });

        const imgData = canvas.toDataURL('image/png');

        // A4 dimensions in mm
        const pdfWidth = 210;
        const pdfHeight = 297;

        if (i > 0) {
            pdf.addPage();
        }

        pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
    }

    pdf.save(filename);
};
