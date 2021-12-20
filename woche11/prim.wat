(module
 (type $FUNCSIG$dd (func (param f64) (result f64)))
 (table 0 anyfunc)
 (memory $0 1)
 (export "memory" (memory $0))
 (export "isPrime" (func $isPrime))
 (func $isPrime (; 0 ;) (param $0 i32) (result i32)
  (local $1 f64)
  (local $2 i32)
  (local $3 f64)
  (local $4 i32)
  (block $label$0
   (br_if $label$0
    (i32.lt_s
     (get_local $0)
     (i32.const 2)
    )
   )
   (block $label$1
    (br_if $label$1
     (i32.eq
      (get_local $0)
      (i32.const 2)
     )
    )
    (br_if $label$0
     (i32.eqz
      (i32.and
       (get_local $0)
       (i32.const 1)
      )
     )
    )
   )
   (block $label$2
    (br_if $label$2
     (i32.or
      (f64.le
       (tee_local $1
        (f64.floor
         (f64.sqrt
          (f64.convert_s/i32
           (get_local $0)
          )
         )
        )
       )
       (f64.const 3)
      )
      (tee_local $2
       (f64.ne
        (get_local $1)
        (get_local $1)
       )
      )
     )
    )
    (set_local $4
     (i32.const 3)
    )
    (loop $label$3
     (br_if $label$0
      (i32.eqz
       (i32.rem_s
        (get_local $0)
        (get_local $4)
       )
      )
     )
     (br_if $label$3
      (i32.eqz
       (i32.or
        (f64.le
         (get_local $1)
         (tee_local $3
          (f64.convert_s/i32
           (tee_local $4
            (i32.add
             (get_local $4)
             (i32.const 2)
            )
           )
          )
         )
        )
        (i32.or
         (get_local $2)
         (f64.ne
          (get_local $3)
          (get_local $3)
         )
        )
       )
      )
     )
    )
   )
   (return
    (i32.const 1)
   )
  )
  (i32.const 0)
 )
)
