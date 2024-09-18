import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, AlertCircle } from 'lucide-react'
import UploadWidget from '@/components/UploadWidget/UploadWidget'

export default function DocumentUpload() {
  const [uploadedFiles, setUploadedFiles] = useState([])

  return (
    <div className="container mx-auto p-6">
      <Card className="w-full max-w-3xl mx-auto">
        <CardHeader>
          <CardTitle>Document Upload</CardTitle>
          <CardDescription>Upload all required documents for your AYUSH startup registration.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <UploadWidget setUploadedFiles={setUploadedFiles} />
         
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