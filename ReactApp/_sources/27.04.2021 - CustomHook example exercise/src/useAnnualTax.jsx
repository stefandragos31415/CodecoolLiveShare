import React from 'react'

export default function useAnnualTax(student) {
    if (student.annual_tax === '1') {
        return true
    } else {
       return false
    }
}