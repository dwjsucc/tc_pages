$(function () {
    //�������֧�� placeholder ʱ��ִ��
    if (!('placeholder' in document.createElement('input'))) {
        $('[placeholder]').each(function () {
            var $tag = $(this); //��ǰ input
            var $copy = $tag.clone();   //��ǰ input �ĸ���
            if ($copy.val() == "") {
                $copy.css("color", "#999");
                $copy.val($copy.attr('placeholder'));
            }
            $copy.focus(function () {
                if (this.value == $copy.attr('placeholder')) {
                    this.value = '';
                    this.style.color = '#000';
                }
            });
            $copy.blur(function () {
                if (this.value=="") {
                    this.value = $copy.attr('placeholder');
                    $tag.val("");
                    this.style.color = '#999';
                } else {
                    $tag.val(this.value);
                }
            });
            $tag.hide().after($copy.show());    //��ǰ input ���� ������ placeholder ����js��input��ʾ
        });
    }
});