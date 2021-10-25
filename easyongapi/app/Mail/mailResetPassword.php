<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class mailResetPassword extends Mailable
{
    use Queueable, SerializesModels;
    private $ong;
    /**
     * Create a new message instance.
     *
     * @return void
     */

    public function __construct($ong)
    {
        $this->ong = $ong;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        $this->subject("Sua senha foi redefinida!");
        $this->to('marciofernandes2@outlook.com', $this->ong->ong_name);
        return $this->view('mail.resetPassword', ['ong' => $this->ong]);
    }
}
