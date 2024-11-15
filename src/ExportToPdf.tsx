import React, { useRef } from 'react';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';

interface Item {
  name: string;
  price: number;
}

interface ExportToPDFProps {
  items: {
    left: Item[];
    right: Item[];
  };
}

const ExportToPDF: React.FC<ExportToPDFProps> = ({ items }) => {
  const pdfRef = useRef<HTMLDivElement>(null);

  const handleExportPDF = async () => {
    const input = pdfRef.current;
    if (input) {
      const canvas = await html2canvas(input, { scale: 2 });
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save('services.pdf');
    }
  };

  return (
    <div>
      <div ref={pdfRef} style={{ padding: 20, backgroundColor: '#1a1a1a', color: '#fff', width: '210mm', height: '297mm' }}>
        <h1 style={{ textAlign: 'center', fontWeight: 'bold' }}>READY TO PURCHASE!</h1>
        <p style={{ textAlign: 'center', margin: '10px 0' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam blandit velit eros.
        </p>

        <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: 20 }}>
          <div>
            {items.left.map((item, index) => (
              <p key={index}>{item.name} - ${item.price}</p>
            ))}
          </div>
          <div>
            {items.right.map((item, index) => (
              <p key={index}>{item.name} - ${item.price}</p>
            ))}
          </div>
        </div>

        <div style={{ marginTop: 30, textAlign: 'center', color: '#ffd700' }}>
          <h2>ADD YOUR BEST SERVICES HERE</h2>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 20, marginTop: 20 }}>
            <div style={{ border: '2px solid #ffd700', padding: 20, width: 120 }}>
              <p>Your Best Service</p>
              <p>$100</p>
            </div>
            <div style={{ border: '2px solid #ffd700', padding: 20, width: 120 }}>
              <p>Your Best Service</p>
              <p>$150</p>
            </div>
          </div>
        </div>
      </div>

      <button onClick={handleExportPDF} style={{ marginTop: 20 }}>Export PDF</button>
    </div>
  );
};

export default ExportToPDF;