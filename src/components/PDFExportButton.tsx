export default function PDFExportButton({ targetId }: { targetId: string }){
  function exportPDF(){
    // Simple print-based export for demo
    window.print()
  }
  return (
    <button onClick={exportPDF} className="px-3 py-2 bg-primary text-white rounded">Export PDF</button>
  )
}
