
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
            scale: 3, // Increased scale for better text sharpness
            useCORS: true,
            logging: false,
            backgroundColor: '#ffffff'
        });

        // Use JPEG instead of PNG for massive size reduction
        const imgData = canvas.toDataURL('image/jpeg', 0.95);

        // A4 dimensions in mm
        const pdfWidth = 210;
        const pdfHeight = 297;

        if (i > 0) {
            pdf.addPage();
        }

        pdf.addImage(imgData, 'JPEG', 0, 0, pdfWidth, pdfHeight);
    }

    pdf.save(filename);
};
