// Простые функции для работы с cookies
export const getCookie = (name: string): string | null => {
    if (typeof document === 'undefined') return null // Для SSR
    const value = `; ${document.cookie}`
    const parts = value.split(`; ${name}=`)
    if (parts.length === 2) return parts.pop()?.split(';').shift() || null
    return null
}

export const setCookie = (name: string, value: string, days = 7): void => {
    if (typeof document === 'undefined') return
    const date = new Date()
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000))
    document.cookie = `${name}=${value};expires=${date.toUTCString()};path=/`
}