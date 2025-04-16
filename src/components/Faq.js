import React , {useState} from 'react'
import FAQ from './Faqcomp';

const Faqs = () => {
    const [faqs, setFaqs] = useState([
        {
            question: "Why choose Kodesavy for App Development services?",
            answer:
                "Kodesavy offers high-quality, customized App Development solutions using the latest technologies, ensuring client satisfaction and exceptional results tailored to your needs.",
            open: true
        },
        {
            question: "Who is the most awesome person?",
            answer: "Kodesavy offers high-quality, customized App Development solutions using the latest technologies, ensuring client satisfaction and exceptional results tailored to your needs.",
            open: false
        },
        {
            question:
                "How many questions does it take to makes a succesful FAQ Page?",
            answer: "This many!",
            open: false
        }
    ]);

    const toggleFAQ = index => {
        setFaqs(
            faqs.map((faq, i) => {
                if (i === index) {
                    faq.open = !faq.open;
                } else {
                    faq.open = false;
                }

                return faq;
            })
        );
    };
    return (

        <div className="faq">
<h2 className='text-center text-dark'><span className='color'>F</span>requently <span className='color'>A</span>sked <span className='color'>Q</span>uestions</h2>
            <div className="faqs">
                {faqs.map((faq, index) => (
                    <FAQ faq={faq} index={index} key={index} toggleFAQ={toggleFAQ} />
                ))}
            </div>
        </div>
    );
}


export default Faqs