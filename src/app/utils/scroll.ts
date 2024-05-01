import { useEffect } from "react"
import { FieldError } from "react-hook-form"

// export function useScrollToError(errors: FieldError) {
//   useEffect(() => {
//     const errorsvalues = Object.values(errors)
//     if (errorsvalues.length > 0) {
//       errorsvalues[0]?.ref.scrollIntoView({ behavior: 'smooth' })
//     }
//   }, [errors])
// }