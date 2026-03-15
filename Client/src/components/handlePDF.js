const handlePDF = async (pdfPath, fileName) => {
  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);

  if (isIOS && navigator.share) {
    try {
      const response = await fetch(pdfPath);
      const blob = await response.blob();
      const file = new File([blob], fileName, { type: "application/pdf" });
      await navigator.share({ files: [file] });
      return;
    } catch {
      // share cancelled or failed — fall through
    }
  }

  // Android + Desktop
  window.open(pdfPath, "_blank");
};

export default handlePDF;