"use client"
import React, { useState, useEffect } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { Bitcoin, Check, Copy, Clock, Router } from 'lucide-react';
import Loading from '../../components/Loading';
import { useParams } from 'next/navigation';
import { useRouter } from 'next/navigation';

function Page() {
    const [isPaid, setIsPaid] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [response, setResponse] = useState(null)
    const [x, setX] = useState(null)
    const [confirmations, setConfirmations] = useState(0);
    const address = "bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh";
    

    const paymentID = useParams().checkout
    const router = useRouter()

    useEffect(() => {
   const fetchPaymentStatus = async () => {
            try {
                const response = await fetch('https://alpha-backend-v7bb.vercel.app/payment-status', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ payment_id: paymentID })
                });

                if (response.ok) {
                    const data = await response.json();
                    setResponse(data);
                    setIsLoading(false)
                } else {
                    console.error('Failed to fetch payment status');
                }

                const response2 = await fetch('http://localhost:3001/verifyPayment', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ payment_id: paymentID })
                });
                
                const data2 = await response2.json();
                setX(data2)
            
            } catch (error) {
                console.error('Error:', error);
            }
        };
            fetchPaymentStatus();
        
    }, []) 


   


    const copyToClipboard = () => {
        navigator.clipboard.writeText(response?.pay_address);
    };

  

    if (x?.escrowStatus == "completed") {
        return (
            <div className="min-h-screen bg-gradient-to-br from-blue-100 to-defl dark:from-black dark:to-[#0E0E0E]  flex items-center justify-center p-4">
                <div className="max-w-4xl w-full">
                    <div className="dark:bg-[#0E0E0E]/50 bg-white backdrop-blur-sm rounded-2xl shadow-2xl p-8 max-w-lg mx-auto text-center animate-fade-in border dark:border-zinc-800 border-gray-200">
                        <div className="w-20 h-20 bg-green-900/20 rounded-full flex items-center justify-center mx-auto mb-6">
                            <Check className="w-10 h-10 text-green-500" />
                        </div>
                        <h2 className="text-2xl font-bold mb-4 dark:text-white text-black">Payment Confirmed</h2>
                        <p className="mb-6 dark:text-zinc-400 text-black">
                             Your payment was completed successfully. Enjoy your nose candy.. And don't forget to leave a feedback!
                        </p>
                        <div className="mb-8 p-4 rounded-lg dark:bg-black/40 bg-gray-100 border dark:border-zinc-800/50 border-gray-200">
                            <p className="text-sm dark:text-zinc-500 text-black">Transaction ID</p>
                            <p className="font-mono text-xs mt-1 dark:text-zinc-300 text-black">
                                0x7ad4c0a6d466c6e3c8f7931d0c6f
                            </p>
                        </div>
                        <button
                            onClick={() => router.push('/shop')}
                            className="bg-zinc-900 text-white px-6 py-3 rounded-lg font-medium transition-colors hover:bg-zinc-800 border border-zinc-800"
                        >
                            Return to Shop
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    return (
     <div>
        {isLoading ? (
        <Loading/>
        ) : (
            <div>
                        <div className="min-h-screen bg-gradient-to-br from-blue-100 to-defl dark:from-black dark:to-[#0E0E0E] flex items-center justify-center p-4">
                            <div className="max-w-4xl w-full">
                                <div className="dark:bg-[#0E0E0E]/50 bg-defl backdrop-blur-sm rounded-2xl shadow-2xl p-8 max-w-lg mx-auto animate-fade-in dark:border dark:border-zinc-800">
                                    <div className="flex items-center justify-between mb-6">
                                        <div className="flex items-center gap-3">
                                            <Bitcoin className="w-6 h-6 text-orange-500" />
                                            <span className="dark:text-white text-black font-medium">Complete the following payment.</span>
                                        </div>
                                        {isLoading && (
                                            <div className="flex items-center gap-2">
                                                <Clock className="w-4 h-4 text-blue-500 animate-pulse" />
                                                <span className="text-sm text-zinc-400">Awaiting Payment</span>
                                            </div>
                                        )}
                                    </div>

                                    <div className="mb-6 p-4 rounded-xl dark:bg-black/40 bg-gray-100 border dark:border-zinc-800/50 border-gray-200">
                                        <div className="flex items-center justify-between mb-4">
                                            <span className="dark:text-zinc-400 text-black">Product</span>
                                            <span className="dark:text-zinc-300 text-black">MacBook Pro M3 Max</span>
                                        </div>
                                        <div className="h-px bg-zinc-800 mb-4"></div>
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <p className="text-sm text-zinc-500 mb-1">Amount Due</p>
                                                <p className="text-xl font-semibold dark:text-white text-black">{response?.pay_amount} BTC</p>
                                                <p className="text-sm text-zinc-500">${response?.price_amount} USD</p>
                                            </div>
                                            {isLoading && (
                                                <div className="relative">
                                                    <div className="w-16 h-16">
                                                        <div className="absolute inset-0 border-4 border-blue-500/30 rounded-full"></div>
                                                        <div className="absolute inset-0 border-4 border-blue-500 rounded-full border-t-transparent animate-spin"></div>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    <div className="p-6 rounded-xl dark:bg-black/40 bg-gray-100 border dark:border-zinc-800/50 border-gray-200 mb-6">
                                        {response?.payment_status == "confirming" ? (
                                            <div className="text-center p-4">
                                                <p className="text-lg font-medium mb-2 dark:text-white text-black">Payment Detected!</p>
                                                <p className="mb-6 text-zinc-400">Waiting for blockchain confirmations...</p>
                                                <div className="flex justify-center gap-3 mb-2">
                                                    {[...Array(3)].map((_, i) => (
                                                        <div key={i} className="relative">
                                                            <div className={`w-3 h-3 rounded-full ${i <= confirmations - 1
                                                                ? 'bg-blue-500'
                                                                : 'bg-zinc-700'
                                                                }`}></div>
                                                            {i <= confirmations - 1 && (
                                                                <div className="absolute inset-0 bg-blue-500 rounded-full pulse-ring"></div>
                                                            )}
                                                        </div>
                                                    ))}
                                                </div>
                                                <p className="text-sm text-zinc-500">{confirmations}/2 confirmations</p>
                                            </div>
                                        ) : (
                                            <>
                                                <div className="flex justify-center mb-6">
                                                    <div className="p-4 bg-white rounded-lg">
                                                        <QRCodeSVG
                                                            value={response?.pay_address}
                                                            size={200}
                                                            level="H"
                                                            includeMargin={true}
                                                        />
                                                    </div>
                                                </div>

                                                <div className="relative">
                                                    <input
                                                        type="text"
                                                        value={response?.pay_address}
                                                        readOnly
                                                        className="w-full dark:bg-black bg-gray-200 border dark:border-zinc-800 border-gray-300 rounded-lg px-4 py-3 font-mono text-sm dark:text-zinc-300 text-black"
                                                    />
                                                    <button
                                                        onClick={copyToClipboard}
                                                        className="absolute right-2 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-zinc-300"
                                                    >
                                                        <Copy className="w-5 h-5" />
                                                    </button>
                                                </div>
                                            </>
                                        )}
                                    </div>


                                </div>
                            </div>
                        </div>
            </div>
        )}
     </div>
    );
}

export default Page;