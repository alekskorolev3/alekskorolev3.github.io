import {Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle} from "@/components/ui/dialog";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";
import {Button} from "@/components/ui/button";
import {toast} from "sonner";
import {useState} from "react";

export const CTAForm = ({open, onOpenChange}) => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmitForm = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch('https://api.flowauto.ru/api/requests', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({name, phone, email, message}),
            });
            const data = await res.json();

            if (res.ok) {
                setIsDialogOpen(false);
                setName('');
                setPhone('');
                setEmail('');
                setMessage('');
                toast.success('Заявка успешно отправлена!');
            } else {
                toast.error(data.error || 'Ошибка при отправке заявки');
            }
        } catch (err) {
            console.error(err);
            toast.error('Ошибка при отправке заявки');
        }
    };

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Оставить заявку</DialogTitle>
                    <DialogDescription>
                        Заполните форму, и наш менеджер свяжется с вами для уточнения деталей.
                    </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleSubmitForm}>
                    <div className="grid gap-4 py-4">
                        <div className="space-y-2">
                            <Label htmlFor="name">Имя *</Label>
                            <Input
                                id="name"
                                type="text"
                                className="text-base"
                                placeholder="Ваше имя"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="phone">Телефон *</Label>
                            <Input
                                id="phone"
                                type="tel"
                                placeholder="Ваш телефон"
                                className="text-base"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                required
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                                id="email"
                                type="email"
                                className="text-base"
                                placeholder="example@mail.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="message">Сообщение</Label>
                            <Textarea
                                id="message"
                                placeholder="Расскажите, какой автомобиль вас интересует..."
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                            />
                        </div>
                    </div>
                    <Button type="submit" className="w-full bg-[#ffd632] text-black hover:bg-[#e6c02d]">
                        Отправить
                    </Button>
                </form>
            </DialogContent>
        </Dialog>
    )
}
