import React from 'react'
 
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';
import { Button } from '@chakra-ui/react';
import { Country } from '../../model/countries';
import * as mime from 'mime-types'

interface ExportCSVProps{
    csvData: Country[],
    fileName: String,
    fileExtension: string
}

enum FileType {
    XLSX = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8",
    CSV = "text/csv",
    DOCX = "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
}

export const ExportCSV = ({csvData, fileName,fileExtension}: ExportCSVProps) => {
 

    
    const fileType = ""+ mime.lookup(fileExtension);

    console.log(fileType)
    

    const exportToCSV = (csvData: Country[], fileName: String) => {
        const ws = XLSX.utils.json_to_sheet(csvData);
        const wb = { Sheets: { 'data': ws }, SheetNames: ['data'] };
        const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
        const data = new Blob([excelBuffer], {type: fileType});
        FileSaver.saveAs(data, fileName + "" + fileExtension);
    }

    return (
        <Button colorScheme='teal' variant='outline' onClick={(e) => exportToCSV(csvData,fileName)}>Export to {fileExtension}</Button>
    )
}