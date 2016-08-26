$(function() {

    var validatorDefaultParam =  {
        live: 'disables',
        message: "This Values is not valid",
        feedbackIcons: {
            valid: 'glyphicon ',
            invalid: 'glyphicon ',
            validating: 'glyphicon glyphicon-refresh'
        }
    };

    /* 文章分类操作验证 */
    $("#category-form").bootstrapValidator({
        validatorDefaultParam,
        fields: {
            name: {
                validators: {
                    notEmpty: {
                        message: "分类名称不能为空"
                    }
                }
            }
        }
    });

    $("#category-form #reset-btn").click(function(){
        var categoryForm = $("#category-form");
        categoryForm.data('bootstrapValidator').resetForm(true);
        categoryForm[0].reset();
    });

    /* 文章操作验证 */
    $("#article-form").bootstrapValidator({
        validatorDefaultParam,
        fields : {
            title : {
                validators : {
                    notEmpty : {
                        message : "文章标题不能为空"
                    }
                }
            },
            cate_id : {
                validators : {
                    notEmpty : {
                        message : "请选择文章分类"
                    }
                }
            }
        }
    });

    $("#article-form #reset-btn").click(function(){
        var articleForm = $("#article-form");
        articleForm.data('bootstrapValidator').resetForm(true);
        articleForm[0].reset();
    });

    /* user add */
    $("#user-form").bootstrapValidator({
        validatorDefaultParam,
        fields : {
            name : {
                validators : {
                    notEmpty : {
                        message : "请输入姓名"
                    },
                    stringLength : {
                        min : 2,
                        max : 30,
                        message : '姓名长度必须在2-30'
                    }
                }
            },
            email : {
                validators : {
                    notEmpty : {
                        message : "请输入登录邮箱"
                    },
                    emailAddress : {
                        message : "请输入正确的登录邮箱"
                    }
                }
            },
            password : {
                validators : {
                    notEmpty : {
                        message : "请输入正确的登录密码"
                    },
                    stringLength : {
                        min : 8,
                        max : 30,
                        message : '请输入8-30位的密码'
                    }
                }
            }
        }
    });

    $("#user-form #reset-btn").click(function(){
        $("#user-form").data('bootstrapValidator').resetForm(true);
        $("#user-form")[0].reset();
    });

    /* user edit */
    $("#edit-user-form").bootstrapValidator({
        validatorDefaultParam,
        fields : {
            name : {
                validators : {
                    notEmpty : {
                        message : "请输入姓名"
                    },
                    stringLength : {
                        min : 2,
                        max : 30,
                        message : '姓名长度必须在2-30'
                    }
                }
            },
            email : {
                validators : {
                    notEmpty : {
                        message : "请输入登录邮箱"
                    },
                    emailAddress : {
                        message : "请输入正确的登录邮箱"
                    }
                }
            },
            password : {
                validators : {
                    stringLength : {
                        min : 8,
                        max : 30,
                        message : '请输入8-30位的密码'
                    }
                }
            }
        }
    });

    $("#edit-user-form #reset-btn").click(function(){
        $("#user-form").data('bootstrapValidator').resetForm(true);
        $("#user-form")[0].reset();
    });

    $("#tag-form").bootstrapValidator({
        validatorDefaultParam,
        fields : {
            name: {
                validators: {
                    notEmpty: {
                        message: "请输入文章标签名"
                    }
                }
            }
        }
    });

    $("#tag-form #reset-btn").click(function(){
        $("#tag-form").data('bootstrapValidator').resetForm(true);
        $("#tag-form")[0].reset();
    });

});
