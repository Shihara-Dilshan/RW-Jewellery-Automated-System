public interface funtionalInterface {
    int x= 12;
    void run();
    void run2();

}

class implemteor  {
    public static void main(String[] args) {
        funtionalInterface f1 = new funtionalInterface(){
            @Override
            public void run() {\c

            }

            @Override
            public void run2() {

            }
        };

    }
}