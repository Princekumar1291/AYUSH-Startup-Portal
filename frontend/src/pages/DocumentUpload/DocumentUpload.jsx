import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { UploadCloud, CheckCircle, AlertCircle } from 'lucide-react'

export default function DocumentUpload() {
  const [uploadedFiles, setUploadedFiles] = useState([
    { name: 'Business_Plan.pdf', status: 'success' },
    { name: 'Financial_Projections.xlsx', status: 'error' },
  ])

  return (
    <div className="container mx-auto p-6">
      <Card className="w-full max-w-3xl mx-auto">
        <CardHeader>
          <CardTitle>Document Upload</CardTitle>
          <CardDescription>Upload all required documents for your AYUSH startup registration.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
            <UploadCloud className="mx-auto h-12 w-12 text-gray-400" />
            <p className="mt-2 text-sm text-gray-600">Drag and drop your files here, or click to select files</p>
            <Input id="file-upload" type="file" className="hidden" multiple />
            <Button className="mt-4" onClick={() => document.getElementById('file-upload').click()}>
              Select Files
            </Button>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Uploaded Documents</h3>
            {uploadedFiles.map((file, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-md">
                <div className="flex items-center">
                  {file.status === 'success' ? (
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  ) : (
                    <AlertCircle className="h-5 w-5 text-red-500 mr-2" />
                  )}
                  <span>{file.name}</span>
                </div>
                <Button variant="ghost" size="sm">Remove</Button>
              </div>
            ))}
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full">Complete Upload</Button>
        </CardFooter>
      </Card>
    </div>
  )
}