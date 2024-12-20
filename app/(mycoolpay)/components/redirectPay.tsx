import { redirect } from 'next/navigation'
import React from 'react'

type Props = {
    url: string
}

export default async function redirectPay({url: url}: Props) {
  redirect(url)
}