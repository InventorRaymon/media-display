import React, { useState, useEffect } from 'react'


const FullscreenButton = () => {
    const [isFullscreen, setIsFullscreen] = useState(false);

    // Function to toggle fullscreen mode
    const toggleFullscreen = () => {
        if (!document.fullscreenElement) {
            // If the page is not in fullscreen mode, request it
            setIsFullscreen(true)
            document.documentElement.requestFullscreen();
        } else {
            // If the page is in fullscreen mode, exit it
            setIsFullscreen(false)

            if (document.exitFullscreen) {
                document.exitFullscreen();
            }
        }
    };

    return (
        <>
            {/* <button
            id="fullscreenButton"
            className=" opacity-60 fixed top-5 right-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={toggleFullscreen}
        >
            Exit Fullscreen
        </button> */}
            <div class="w-screen h-screen">
                {/* <canvas id="canvas_layout" width="1920" height="1080" style="border: 1px solid black; background-image: url(&quot;../../images/grid-4.png&quot;); display: none;">
                    This text is displayed if your browser does not support HTML5 Canvas.
                </canvas> */}
                <div id="divPreview">

                    <div className='w-screen h-screen border-solid-[1px] border-black p-0' style="width:1922px; height:1082px; border:1px solid black; padding:0px;">
                        <div style="width:945px; height:467px; border:1px solid black;margin-top:132px;margin-left:387px; position:absolute;background:blue;color:#fff">

                            <video controls="" style="height:100%;width:100%;" autoplay="" loop=""></video>
                        </div>
                        <div style="width:550px; height:466px; border:1px solid black;margin-top:134px;margin-left:1334px; position:absolute;background:blue;color:#fff">

                            <video controls="" style="height:100%;width:100%;" autoplay="" loop=""></video>
                        </div>


                        <div style="width:379px; height:470px;margin-top:605px;margin-left:4px; position:absolute; background:#000000">
                            <div class="text-center" style="width:380px; height:87px; border:1px solid black;margin-top:0px;margin-left:-2px; background: #14a54a; position:absolute;font-size: 20px; font-family: Arial; color: #ffffff;">
                                <div>Makati - Terminal 2</div>
                            </div>
                            <div class="text-center" style="width:380px; height:54px; border:1px solid black;margin-top:86px;margin-left:0px; background: #f9c74f; position:absolute;font-size: 15px; font-family: Arial; color: #000000;">
                                <div style="margin-top: 13px;">Customer No.</div>
                            </div>
                            <div class="text-center" style="width:380px; height:247px; border:1px solid black;margin-top:138px;margin-left:0px; background: red; position:absolute;font-size: 50px; font-family: Arial; color:#040000;">
                                <div style="margin-top: 61px;">1</div>
                            </div>
                            <div class="text-center" style="width:380px; height:89px; border:1px solid black;margin-top:381px;margin-left:0px; background: #027bc0; position:absolute;font-size: 20px; font-family: Arial; color: #ffffff;">
                                2,3,4,5
                            </div>

                        </div>
                        <div style="width:379px; height:470px;margin-top:604px;margin-left:387px; position:absolute; background:#000000">
                            <div class="text-center" style="width:380px; height:87px; border:1px solid black;margin-top:0px;margin-left:0px; background: #14a54a; position:absolute;font-size: 20px; font-family: Arial; color: #ffffff;">
                                <div>Makati - Terminal 3</div>
                            </div>
                            <div class="text-center" style="width:380px; height:54px; border:1px solid black;margin-top:86px;margin-left:0px; background: #f9c74f; position:absolute;font-size: 15px; font-family: Arial; color:#000000;">
                                <div style="margin-top: 13px;">Customer No.</div>
                            </div>
                            <div class="text-center" style="width:380px; height:247px; border:1px solid black;margin-top:138px;margin-left:0px; background: red; position:absolute;font-size: 50px; font-family: Arial; color:#000000;">
                                <div style="margin-top: 61px;">1</div>
                            </div>
                            <div class="text-center" style="width:380px; height:89px; border:1px solid black;margin-top:381px;margin-left:0px; background: #027bc0; position:absolute;font-size: 20px; font-family: Arial; color: #ffffff;">
                                2,3,4,5
                            </div>

                        </div>
                        <div style="width:379px; height:470px;margin-top:604px;margin-left:771px; position:absolute; background:#000000">
                            <div class="text-center" style="width:380px; height:87px; border:1px solid black;margin-top:0px;margin-left:0px; background: #14a54a; position:absolute;font-size: 20px; font-family: Arial; color: #ffffff;">
                                <div>Makati - Terminal 4</div>
                            </div>
                            <div class="text-center" style="width:380px; height:54px; border:1px solid black;margin-top:86px;margin-left:0px; background: #f9c74f; position:absolute;font-size: 15px; font-family: Arial; color:#000000;">
                                <div style="margin-top: 13px;">Customer No.</div>
                            </div>
                            <div class="text-center" style="width:380px; height:247px; border:1px solid black;margin-top:138px;margin-left:0px; background: red; position:absolute;font-size: 50px; font-family: Arial; color:#000000;">
                                <div style="margin-top: 61px;">1</div>
                            </div>
                            <div class="text-center" style="width:380px; height:89px; border:1px solid black;margin-top:381px;margin-left:0px; background: #027bc0; position:absolute;font-size: 20px; font-family: Arial; color: #ffffff;">
                                2,3,4,5
                            </div>

                        </div>
                        <div style="width:379px; height:470px;margin-top:605px;margin-left:1154px; position:absolute; background:#000000">
                            <div class="text-center" style="width:380px; height:87px; border:1px solid black;margin-top:0px;margin-left:0px; background: #14a54a; position:absolute;font-size: 20px; font-family: Arial; color: #ffffff;">
                                <div>Makati - Terminal 5</div>
                            </div>
                            <div class="text-center" style="width:380px; height:54px; border:1px solid black;margin-top:86px;margin-left:0px; background: #f9c74f; position:absolute;font-size: 15px; font-family: Arial; color:#000000;">
                                <div style="margin-top: 13px;">Customer No.</div>
                            </div>
                            <div class="text-center" style="width:380px; height:247px; border:1px solid black;margin-top:138px;margin-left:0px; background: red; position:absolute;font-size: 50px; font-family: Arial; color:#000000;">
                                <div style="margin-top: 61px;">1</div>
                            </div>
                            <div class="text-center" style="width:380px; height:89px; border:1px solid black;margin-top:381px;margin-left:0px; background: #027bc0; position:absolute;font-size: 20px; font-family: Arial; color: #ffffff;">
                                2,3,4,5
                            </div>

                        </div>
                        <div style="width:379px; height:470px;margin-top:604px;margin-left:1537px; position:absolute; background:#000000">
                            <div class="text-center" style="width:380px; height:87px; border:1px solid black;margin-top:0px;margin-left:0px; background: #14a54a; position:absolute;font-size: 20px; font-family: Arial; color: #ffffff;">
                                <div>Makati - Terminal 6</div>
                            </div>
                            <div class="text-center" style="width:380px; height:54px; border:1px solid black;margin-top:86px;margin-left:0px; background: #f9c74f; position:absolute;font-size: 15px; font-family: Arial; color:#000000;">
                                <div style="margin-top: 13px;">Customer No.</div>
                            </div>
                            <div class="text-center" style="width:380px; height:247px; border:1px solid black;margin-top:138px;margin-left:0px; background: red; position:absolute;font-size: 50px; font-family: Arial; color:#000000;">
                                <div style="margin-top: 61px;">1</div>
                            </div>
                            <div class="text-center" style="width:380px; height:89px; border:1px solid black;margin-top:381px;margin-left:0px; background: #027bc0; position:absolute;font-size: 20px; font-family: Arial; color: #ffffff;">
                                2,3,4,5
                            </div>

                        </div>
                        <div style="width:379px; height:470px;margin-top:131px;margin-left:9px; position:absolute; background:#000000">
                            <div class="text-center" style="width:380px; height:87px; border:1px solid black;margin-top:0px;margin-left:0px; background: #14a54a; position:absolute;font-size: 20px; font-family: Arial; color: #ffffff;">
                                <div>Makati - Terminal 1</div>
                            </div>
                            <div class="text-center" style="width:380px; height:54px; border:1px solid black;margin-top:86px;margin-left:0px; background: #f9c74f; position:absolute;font-size: 15px; font-family: Arial; color:#000000;">
                                <div style="margin-top: 13px;">Customer No.</div>
                            </div>
                            <div class="text-center" style="width:380px; height:247px; border:1px solid black;margin-top:138px;margin-left:0px; background: red; position:absolute;font-size: 50px; font-family: Arial; color:#000000;">
                                <div style="margin-top: 61px;">1</div>
                            </div>
                            <div class="text-center" style="width:380px; height:89px; border:1px solid black;margin-top:381px;margin-left:0px; background: #027bc0; position:absolute;font-size: 20px; font-family: Arial; color: #ffffff;">
                                2,3,4,5
                            </div>

                        </div>
                        <div style="padding-top: 39px; width:1918px; height:131px;margin-top:-1px;margin-left:2px; position:absolute; background:#000000; font-size:50px; font-family:Arial; color:#ffffff;
                                   font-weight : bolder;  
 ">May 24, 2024 - 04:01:49 PM
                        </div>


                    </div></div>
            </div>
        </>
    );
};

export default FullscreenButton;