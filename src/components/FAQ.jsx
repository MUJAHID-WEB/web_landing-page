import React from 'react'

const FAQ = () => {
  return (
    <div className='faq'>
        <h1>Frequently Asked Questions</h1>
        <p>Have question? We are here to help</p>
        <section className='services'>
            <div className='service-right'>
                <div className='qa'>
                    <input type="checkbox" id='collapsible-head-1' />
                    <label for = "collapsible-head-1">What is the price?</label>
                    <div className='collapsible-text-1'>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit odit similique doloremque
                            ab unde. Placeat recusandae nobis voluptate atque, fugit itaque nam quos.</p>
                    </div>
                </div>
                <div className='qa'>
                <input type="checkbox" id="collapsible-head-2" />
                <label for="collapsible-head-2">How many keys are there?</label>
                <div class="collapsible-text-2">
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit odit similique doloremque
                        ab unde. Placeat recusandae nobis voluptate atque, fugit itaque nam quos.</p>
                </div>
                </div>
                <div className='qa'>
                    <input type="checkbox" id="collapsible-head-3" />
                    <label for="collapsible-head-3">Are keys unbindable?</label>
                    <div class="collapsible-text-3">
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit odit similique doloremque
                            ab unde. Placeat recusandae nobis voluptate atque, fugit itaque nam quos.</p>
                    </div>
                </div>
                <div className='qa'>
                    <input type="checkbox" id="collapsible-head-4" />
                    <label for="collapsible-head-4">What chain do txn support?</label>
                    <div class="collapsible-text-4">
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit odit similique doloremque
                            ab unde. Placeat recusandae nobis voluptate atque, fugit itaque nam quos.</p>
                    </div>
                </div>
                <div className='qa'>
                    <input type="checkbox" id="collapsible-head-5" />
                    <label for="collapsible-head-5">What OS is TN compatible with?</label>
                    <div class="collapsible-text-5">
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit odit similique doloremque
                            ab unde. Placeat recusandae nobis voluptate atque, fugit itaque nam quos.</p>
                    </div>
                </div>
                <div className='qa'>
                    <input type="checkbox" id="collapsible-head-6" />
                    <label for="collapsible-head-6">Is TXN safe to use?</label>
                    <div class="collapsible-text-6">
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit odit similique doloremque
                            ab unde. Placeat recusandae nobis voluptate atque, fugit itaque nam quos.</p>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default FAQ