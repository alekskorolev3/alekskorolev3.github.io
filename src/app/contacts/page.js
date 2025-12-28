'use client';

import { MapPin, Phone, Mail, Clock, MessageCircle, Send } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';

export default function ContactsPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const res = await fetch('https://api.flowauto.ru/api/requests', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })

      const data = await res.json()

      if (res.ok) {
        toast.success('Заявка успешно отправлена!');
        setFormData({ name: '', phone: '', email: '', message: '' })
      } else {
        toast.error(data.error || 'Ошибка при отправке заявки');
      }
    } catch (err) {
      console.error(err)
      toast.error('Ошибка при отправке заявки');
    }
  }

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
      <div>
        {/* Hero Section */}
        <section className="relative bg-white py-20 overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#ffd632] rounded-full opacity-10 -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-black rounded-full opacity-5 translate-y-1/2 -translate-x-1/2"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl">
              <h1 className="mb-6 text-[rgb(60,60,60)] text-[20px] font-bold">Контакты</h1>
              <p className="text-xl text-gray-600">
                Свяжитесь с нами любым удобным способом. Мы всегда рады ответить на ваши вопросы и помочь с подбором автомобиля.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Info and Form */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div
                      className="w-12 h-12 bg-[#ffd632] bg-opacity-20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-6 h-6 text-black"/>
                  </div>
                  <div>
                    <h3 className="mb-2">Телефоны</h3>
                    <div className="space-y-1">
                      <p className="text-gray-600">Беларусь:  <a
                          href="tel:+375291234567"
                          className="text-gray-600 hover:text-black transition-colors"
                      >
                         +375 (29) 123-45-67
                      </a></p>
                      <p className="text-gray-600">Россия:  <a
                          href="tel:+77971234567"
                          className="text-gray-600 hover:text-black transition-colors"
                      >
                         +7 (797) 123-45-67
                      </a></p>
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div
                      className="w-12 h-12 bg-[#ffd632] bg-opacity-20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-black"/>
                  </div>
                  <div>
                    <h3 className="mb-2">Email</h3>
                    <a
                        href="mailto:info@flowauto.ru"
                        className="text-gray-600 hover:text-black transition-colors"
                    >
                      info@flowauto.ru
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div
                      className="w-12 h-12 bg-[#ffd632] bg-opacity-20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-6 h-6 text-black"/>
                  </div>
                  <div>
                    <h3 className="mb-2">Мессенджеры</h3>
                    <div className="space-y-1">
                      <p className="text-gray-600">Telegram: <a
                          href="https://t.me/flowauto_ru"
                          target="_blank"
                          className="text-gray-600 hover:text-black transition-colors"
                      >
                        @flowauto_ru
                      </a></p>
                      <p className="text-gray-600">WhatsApp: <a
                          href="tel:+375291234567"
                          className="text-gray-600 hover:text-black transition-colors"
                      >
                        +375 (29) 123-45-67
                      </a></p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <div className="bg-white rounded-lg shadow-sm p-8">
                  <h2 className="mb-6">Оставьте заявку</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block mb-2">
                        Ваше имя *
                      </label>
                      <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ffd632] focus:border-transparent"
                          placeholder="Иван Иванов"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block mb-2">
                        Телефон *
                      </label>
                      <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ffd632] focus:border-transparent"
                          placeholder="+7 (999) 123-45-67"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block mb-2">
                        Email
                      </label>
                      <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ffd632] focus:border-transparent"
                          placeholder="example@mail.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block mb-2">
                        Сообщение
                      </label>
                      <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows={4}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ffd632] focus:border-transparent resize-none"
                          placeholder="Расскажите, какой автомобиль вас интересует..."
                      />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-[#ffd632] text-black py-3 rounded-lg hover:bg-[#e6c02d] transition-colors flex items-center justify-center gap-2"
                    >
                      <Send className="w-5 h-5" />
                      Отправить заявку
                    </button>

                    <p className="text-sm text-gray-500 text-center">
                      Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
  );
}
