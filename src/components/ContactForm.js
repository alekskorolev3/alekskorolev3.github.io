'use client'

import {useState} from 'react';
import {Send} from 'lucide-react';
import {toast} from 'sonner';

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        message: ''
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch('https://api.flowauto.ru/api/requests', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(formData)
            });

            const data = await res.json();

            if (res.ok) {
                toast.success('Заявка успешно отправлена!');
                setFormData({name: '', phone: '', email: '', message: ''});
            } else {
                toast.error(data.error || 'Ошибка при отправке заявки');
            }
        } catch (err) {
            console.error(err);
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
        <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="mb-6">Оставьте заявку</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label htmlFor="name" className="block mb-2">Ваше имя *</label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required
                           className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ffd632] focus:border-transparent"
                           placeholder="Иван Иванов"/>
                </div>

                <div>
                    <label htmlFor="phone" className="block mb-2">Телефон *</label>
                    <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required
                           className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ffd632] focus:border-transparent"
                           placeholder="+7 (999) 123-45-67"/>
                </div>

                <div>
                    <label htmlFor="email" className="block mb-2">Email</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange}
                           className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ffd632] focus:border-transparent"
                           placeholder="example@mail.com"/>
                </div>

                <div>
                    <label htmlFor="message" className="block mb-2">Сообщение</label>
                    <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows={4}
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ffd632] focus:border-transparent resize-none"
                              placeholder="Расскажите, какой автомобиль вас интересует..."/>
                </div>

                <button type="submit"
                        className="w-full bg-[#ffd632] text-black py-3 rounded-lg hover:bg-[#e6c02d] transition-colors flex items-center justify-center gap-2">
                    <Send className="w-5 h-5"/> Отправить заявку
                </button>

                <p className="text-sm text-gray-500 text-center">
                    Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                </p>
            </form>
        </div>
    )
}
