'use client'

import { useEffect, useState } from 'react'

const COOKIE_NAME = 'cookie_consent'

export default function CookieConsent() {
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        const consent = document.cookie
            .split('; ')
            .find((row) => row.startsWith(`${COOKIE_NAME}=`))

        if (!consent) {
            setVisible(true)
        }
    }, [])

    const acceptCookies = () => {
        document.cookie = `${COOKIE_NAME}=true; path=/; max-age=${60 * 60 * 24 * 365}`
        setVisible(false)
    }

    if (!visible) return null

    return (
        <div className="
      fixed
      bottom-4
      left-4
      right-4
      z-50
      bg-white
      border
      border-gray-200
      rounded-xl
      shadow-lg
      p-4
      max-w-4xl
      mx-auto
    ">
            <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
                <p className="text-sm text-gray-700">
                    Мы используем файлы cookie для улучшения работы сайта и анализа трафика.
                    Продолжая пользоваться сайтом, вы соглашаетесь с использованием cookie.
                </p>

                <button
                    onClick={acceptCookies}
                    className="
            bg-black
            text-white
            px-5
            py-2
            rounded-lg
            text-sm
            hover:bg-gray-800
            transition
          "
                >
                    Принять
                </button>
            </div>
        </div>
    )
}
