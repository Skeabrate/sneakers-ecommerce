import { useEffect, useState } from 'react';

export const useImageReader = (image) => {
    const [previewUrl, setPreviewUrl] = useState(false)

    useEffect(() => {
        if (image === undefined || image === '') {
            setPreviewUrl(null)
            return null
        }
        else {
            const fileReader = new FileReader()
            fileReader.onload = () => {
                setPreviewUrl(fileReader.result)
            }
            fileReader.readAsDataURL(image)
        }
    }, [image])

    return {
        previewUrl,
    }
};